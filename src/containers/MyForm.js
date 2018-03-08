import React , {Component} from 'react';
import { appConfig } from '../../config';
import FormComponent from '../components/FormComponent';

export default class MyForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            selectedState: '',
            selectedDistrict: '',
            stateData: [],
            districtData:[],
            formData: {},
            formDataError:{}
        };
        this.submitFormData = this.submitFormData.bind(this);
    }

    componentWillMount() {

    }

    componentDidMount() {
        this.setState({
            stateData: appConfig.levelJSON.states
        })
    }

    submitFormData(formData) {
        console.log("Step 2");
        debugger;
        this.setState({
            formData
        })
    }

    componentWillReceiveProps(nextProps) {

    }

    handleStateChange(e) {
        e.preventDefault();
        var states = this.state.stateData;
        var selectedState = e.target.value;
        var state = states.find((o)=>{
            return o.name === selectedState;
        });
        if(state) {
            var districts = state.districts;
            this.setState({
                selectedState,
                districtData: districts
            })
        }
        else {
            this.setState({
                districtData:[]
            })
        }

    }

    handleDistrictChange(e) {
        //preventDefault
        //setState selected District
    }

    render() {
        console.log("Data",appConfig.levelJSON.states);
        const {formData,stateData, districtData } = this.state;
        return (
            <FormComponent
                stateData={stateData}
                districtData={districtData}
                formData={formData}
                submitFormData={this.submitFormData}
            />
        )
    }
}
