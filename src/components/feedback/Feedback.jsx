import styled from 'styled-components';

const StyledButton = styled.button`
    background-color: lightblue;
    color: grey;
    padding: 15px 32px;
    text-align: center;
    cursor: pointer;
    border-radius: 5px;
    border-style: none;

    &:not(:last-child) {
        margin-right: 10px;
    }

    &:hover {
        color: black;
        box-shadow: 0px 0px 3px 1px grey;
    }
`;

const Feedback = ({ options, onLeaveFeedback }) => (
    <div>
        { options.map( option => (
            <StyledButton key={option} onClick={() => onLeaveFeedback(option)}>
                {option}
            </StyledButton>
        ))}
    </div>
)

export default Feedback;