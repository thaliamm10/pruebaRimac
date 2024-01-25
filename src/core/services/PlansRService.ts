// DataService.ts
import { useDispatch, useSelector } from 'react-redux';
import { addData } from '../states/plans/PlansActions';

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
        console.log('------')
        console.log(newData)
        console.log('------')
        dispatch(addData(newData));
    };

    const showData = () => {
        console.log(data);
    };

    return { addDataToRedux, showData };
};

export default usePlansService;
