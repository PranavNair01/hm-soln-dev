import styled from 'styled-components'
// import TextContainer from './components/TextContainer';

const Container = styled.div`
height: 100px;
box-shadow: 0 0 6px;
position: relative;
top: 20px;
left: 50px;
background-color: rgb(0,0,0,0.5);
cursor:pointer;
`;

function Wrapper(props) {
    let offsetX, offsetY
    const move = e => {
        const el = e.target
        el.style.left = `${e.pageX - offsetX}px`
        el.style.top = `${e.pageY - offsetY}px`
    }
    const add = e => {
        console.log("First element is : ", e);
        const el = e.target;
        console.log("Second element is : ", el);
        offsetX = e.clientX - el.getBoundingClientRect().left
        offsetY = e.clientY - el.getBoundingClientRect().top
        el.addEventListener('mousemove', move)
    }
    const remove = e => {
        const el = e.target
        el.removeEventListener('mousemove', move)
    }

    return (
        <Container onMouseDown={add} onMouseUp={remove}>
            {props.children}
        </Container>
    )
}

export default Wrapper;