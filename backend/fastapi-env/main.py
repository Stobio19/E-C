from fastapi import FastAPI, Depends, HTTPException
from fastapi.security.oauth2 import OAuth2PasswordBearer
from fastapi.middleware.cors import CORSMiddleware
from authlib.integrations.requests_client import OAuth2Session

app = FastAPI()

domain = 'dev-b6nqtl5cxl0okx61.us.auth0.com'
clientId = 'WmPa4lqH9a1e1GJHH4iONPr2RInW46eb'
client_secret = 'i-tFOY8ICbpyraGeaRvNqnPfw7me5yg579qjngPTeM9dNHisXsYgDWipwxkV3cx8'
auth0_domain = "dev-b6nqtl5cxl0okx61.auth0.com"

# Configuración de OAuth2 con Auth0
oauth2_scheme = OAuth2PasswordBearer(tokenUrl=f"https://{auth0_domain}/oauth/token")

# Función para verificar la autorización
async def verify_authorization(token: str = Depends(oauth2_scheme)):
    try:
        # Utiliza la biblioteca Authlib para verificar y decodificar el token
        auth0 = OAuth2Session(clientId, client_secret, token=token)
        user_info = auth0.get(f"https://{auth0_domain}/userinfo").json()

        if not user_info:
            raise HTTPException(status_code=401, detail="No se pudo obtener información del usuario")

        return user_info

    except Exception as e:
        raise HTTPException(status_code=401, detail="No autorizado")

# Ruta protegida
@app.get("/secure-data", response_model=dict)
async def secure_data(user_info: dict = Depends(verify_authorization)):
    # Aquí puedes acceder a la información del usuario verificado
    return {"message": "Acceso autorizado", "user_info": user_info}

# Connection react

# Configurar CORS para permitir solicitudes desde el origen de tu aplicación de React
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Reemplaza con la URL de tu aplicación de React
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)