import { useState } from 'react';
import Navbar from './Navbar';
import Main from './Main';

function Container(){
        const [navigation, setNavigation] = useState<number>(0);

        return(
                <div className="flex max-[600px]:flex-col-reverse">
                        <Navbar setNavigation={setNavigation} />
                        
                        <Main navigation={navigation}/>
                </div>
        )
}

export default Container