import 'jest';

let xx= jest.fn().mockReturnValue(10);

const funcMock= jest.mock('./basicOperations', () => {
    return{
        xx,
    };
});
export default funcMock;