class User {   
    constructor(nombreDeUsuario, edad, creado = null) {
        this.nombreDeUsuario = nombreDeUsuario;
        this.edad = edad;
        this.creado = creado ? new Date(creado): new Date();
    }
  }