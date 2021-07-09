import renderer from 'react-test-renderer'
import Rewards from '../components/Rewards'
import {BrowserRouter as Router} from 'react-router-dom'
import Header from '../Components/Header'


describe('testing components',()=>{
    //snapshot testing
    
    
        test('initial snapshot',()=>{
            const tree = renderer.create(<Rewards/>).toJSON();
            expect().toMatchSnapshot()
        })
                
        /* test('Header snapshot testing',()=>{
            const tree = renderer.create(<Header/>).toJSON();
            expect(tree).toMatchSnapshot()
        }) */
    
    })