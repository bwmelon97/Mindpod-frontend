import React from "react";
import { Route, Switch } from "react-router";
import { useHistory } from "react-router-dom";
import { MainPage, PodcastDetail } from "@pages/client";
import Header from "@components/Header";
import useMeQuery from "@hooks/useMeQuery";
import HostMainPage from "@pages/host/HostMainPage";
import { UserRole } from "@gql-types/globalTypes";
 

const LoginGate = ({role}: { role: UserRole | undefined }) => {
    const history = useHistory()
    
    switch(role) {
        case UserRole.Host:
            history.replace('/h/main'); 
            break;
        
        case UserRole.Listener:
            history.replace('/l/main')
            break;

        default:
            history.replace('/error')
    }

    return <> </>
}

function LoggedInRouter () {
    const { data, loading } = useMeQuery()

    if (!data || loading) {
        return (
            <div className='h-screen flex items-center justify-center' >
                loading...
            </div>
        )
    }
    const { me: { user } } = data;
    
    return (
        <div className='bg-white min-h-screen' >
            <Header />
            <Switch>
                <Route exact path='/' > <LoginGate role={user?.role} /> </Route>
                <Route path='/edit-profile'> <div className='h-screen flex items-center justify-center' >Edit Profile</div> </Route>
                <Route path='/l/main'> <MainPage /> </Route>
                <Route path='/l/podcast/:id'> <PodcastDetail /> </Route>
                <Route path='/h/main'> <HostMainPage /> </Route>
                {/* <Redirect to='/main' /> */}
            </Switch>
        </div>
    )
}

export default LoggedInRouter