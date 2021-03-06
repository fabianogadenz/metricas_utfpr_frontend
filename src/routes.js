import React from 'react';
import { BrowserRouter, Switch, Route, Redirect  } from 'react-router-dom';

import { PrivateRoute } from './PrivateRoute';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import New from './pages/New';
import NovoUsuario from './pages/Usuarios/NovoUsuario';
import Usuarios from './pages/Usuarios/ListarUsuarios';
import NovaArea from './pages/Areas/NovaArea';
import NovaSubArea from './pages/Areas/NovaSubArea';
import ListaAreas from './pages/Areas/ListarArea';
import ListaSubAreas from './pages/Areas/ListarSubAreas';
import NovaTipoAtividade from './pages/TipoAtividade/NovaTipoAtividade';
import ListaTipoAtividade from './pages/TipoAtividade/ListaTipoAtividade';
import Planos from './pages/Planos';
import AtividadeAdd from './pages/AtividadeAdd';
import Ranking from './pages/Ranking';
import ListaAtividadesRegistradas from './pages/AtividadesRegistradas';




export default function Routes(){
    const isAuthenticated = localStorage.getItem('token') !== null;
    const token = localStorage.getItem('token');
    const tipoCadastro = localStorage.getItem('tipoCadastro');
    console.log(token);
    console.log(tipoCadastro);
    return(
        
        <BrowserRouter>
            <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/new" component={New} />
            <Route path="/novoUsuario" component={NovoUsuario} />
            <Route path="/usuarios" component={Usuarios} />
            <Route path="/novaArea" component={NovaArea} />
            <Route path="/listaAreas" component={ListaAreas} />
            <Route path="/novaSubArea" component={NovaSubArea} />
            <Route path="/listaSubAreas" component={ListaSubAreas} />
            <Route path="/novaTipoAtividade" component={NovaTipoAtividade} />
            <Route path="/listaTipoAtividade" component={ListaTipoAtividade} />
            <Route path="/planos" component={Planos} />
            <Route path="/atividadeAdd" component={AtividadeAdd} />
            <Route path="/ranking" component={Ranking} />
            

            <PrivateRoute exat path="/listAtividadesRegistradas" component={ListaAtividadesRegistradas} />
           
            <Route path="*" component={() => <h1>Page not found</h1>} />
           
            </Switch>
        </BrowserRouter>
    )
}
//<Route component={Login} />