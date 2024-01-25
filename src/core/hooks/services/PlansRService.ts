import { useDispatch, useSelector } from 'react-redux';
import { addData } from '../../states/plans/PlansActions';
type Data = {
    documento: '',
    telefono: '',
    terminos1: false,
    terminos2: false,
};

const usePlansService = () => {

    const dispatch = useDispatch();
    // @ts-ignore
    const data = useSelector((state) => state.data.data);

    const addDataToRedux = (newData: Data) => {
        dispatch(addData(newData));

    };

    const showData = () => {
        console.log(data);
    };

    return { addDataToRedux, showData };
};

export default usePlansService;
