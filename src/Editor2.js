import TextContainer from './components/TextContainer';
import ColorPicker from './components/ColorPicker';
import Wrapper from './Wrapper';
import { Link, useParams } from 'react-router-dom';

const Editor2 = () => {

    const { id, opt } = useParams();
    
    return ( 
        <div className='main_container'>
            <div className='text_container'>
                <Wrapper>
                <TextContainer />
                </Wrapper>
            </div>
            <div className='change_color_container'>
                <ColorPicker />
            </div>
        </div>
     );
}
 
export default Editor2;