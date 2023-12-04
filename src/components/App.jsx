import '../assets/styles/App.css'
import LogoutButton from '../profile/Logout'
import CheckUser from '../protected/UserCheck'

function App() {
  const y = CheckUser()
  var aparecer = false
  if (y!= 'Request failed with status code 401'){
    aparecer = true
  }

  return (
    <>
      <div className="navbar">
          <a href='/'>⌂</a>
          <a href='/guia'>Guía</a>
          <a href='/reglas'>Reglas</a>
          <a href='/acerca'>Acerca del juego</a>
          <a href= '/questions'>Preguntas Frecuentes</a>
          <a href= '/about'>Creadores</a>
          <a href= '/login'>Iniciar Sesión</a>
          <a href= '/signup'>Registrarse</a>
          {aparecer==true && <LogoutButton></LogoutButton>}
          {aparecer==true && <a href= '/play'>Jugar</a>}
          {aparecer==true && <a href='/tablero'>Tablero</a>}
      </div>

    </>
  )
}

export default App
