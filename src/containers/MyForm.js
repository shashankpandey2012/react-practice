import React , {Component} from 'react';
import { appConfig } from '../../config';

export default class MyForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            firstname:'',
            lastname:'',
            calender:'',
            address:'',
            line1:'',
            building:'',
            pincode:'',
            age:'',
            selectedState: '',
            selectedDistrict: '',
            stateData: [],
            districtData:[]
        };
        this.handleStateChange = this.handleStateChange.bind(this);
        this.handleDistrictChange = this.handleDistrictChange.bind(this);
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleAgeChange = this.handleAgeChange.bind(this);
        this.handleCalenderChange=this.handleCalenderChange.bind(this);
        this.handleAddressChange = this.handleAddressChange.bind(this);
        this.handleLine1Change = this.handleLine1Change.bind(this);
        this.handleBuildingChange = this.handleBuildingChange.bind(this);
        this.handlePinCodeChange = this.handlePinCodeChange.bind(this);

    }

    componentWillMount() {

    }

    componentDidMount() {
        this.setState({
            stateData: appConfig.levelJSON.states
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

    handleFirstNameChange(e) {
        this.setState({
            firstname:e.target.value
        })
    }
    handleLastNameChange(e) {
        this.setState({
            lastname:e.target.value
        })
    }
    handleAgeChange(e) {
        this.setState({
            age:e.target.value
        })
    }
    handleCalenderChange(e) {
        this.setState({
            calender:e.target.value
        })
    }
    handleAddressChange(e) {
        this.setState({
            address:e.target.value
        })
    }
    handleLine1Change(e) {
        this.setState({
            line1:e.target.value
        })
    }
    handleBuildingChange(e) {
        this.setState({
            buidling:e.target.value
        })
    }
    handlePinCodeChange(e){
        this.setState({
            pincode:e.target.value
        })
    }

    render() {
        console.log("Data",appConfig.levelJSON.states);
        const { firstname,lastname,age,calender,address,line1,building,pincode,stateData, districtData } = this.state;

        const states = stateData.map((item,index)=>{
            return (
                <option key={index} value={item.name}>{item.name}</option>
            )
        });
        const districts = districtData.map((item,index)=>{
            return (
                <option key={index} value={item.name}>{item.name}</option>
            )

        });
        return (
            <div className="container">
                <h1 className="well">Registration Form</h1>
                <div className="col-lg-12 well">
                    <div className="row">
                        <form>
                            <div className="col-sm-12">
                                <div className="row">
                                    <div className="col-sm-6 form-group">
                                        <label>First Name</label>
                                        <input type="text"
                                               value={firstname}
                                               placeholder="Enter First Name Here.."
                                               className="form-control"
                                               onChange={(e)=>{this.handleFirstNameChange(e)}} />
                                    </div>
                                    <div className="col-sm-6 form-group">
                                        <label>Last Name</label>
                                        <input type="text"
                                               value={lastname}
                                               placeholder="Enter Last Name Here.."
                                               className="form-control"
                                               onChange={(e)=>{this.handleLastNameChange(e)}}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6 form-group">
                                        <label>Age</label>
                                        <input type="number"
                                               value={age}
                                               placeholder="Enter Your Age Here.."
                                               className="form-control"
                                              onChange={(e)=>{this.handleAgeChange(e)}} />
                                    </div>
                                    {/*<div className="form-group">*/}
                                        {/*<label>Address</label>*/}
                                        {/*<textarea placeholder="Enter Address Here.." rows="3" className="form-control"/>*/}
                                    {/*</div>*/}
                                    <div className="col-sm-6 form-group">
                                        <label>Select Date</label>
                                        <input type="date"
                                               className="form-control"
                                               value={calender}
                                               onChange={(e)=>{this.handleCalenderChange(e)}} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6 form-group">
                                        <label>Address</label>
                                        <input type="text"
                                               placeholder="Enter Address Here.."
                                               className="form-control"
                                               value={address}
                                               onChange={(e)=>{this.handleAddressChange(e)}} />
                                    </div>
                                    <div className="col-sm-6 form-group">
                                        <label>Line 1</label>
                                        <input type="text"
                                               placeholder="Enter Address Here.."
                                               className="form-control"
                                               value={line1}
                                               onChange={(e)=>{this.handleLine1Change(e)}} />
                                    </div>
                                </div>
                                <div className=" col-sm-6 form-group">
                                    <label>Building</label>
                                    <input type="text"
                                           placeholder="Enter Address Here.."
                                           className="form-control"
                                           value={building}
                                           onChange={(e)=>{this.handleBuildingChange(e)}} />
                                </div>
                                <div className="col-sm-6 form-group">
                                    <label>State</label>
                                    <select className="form-control" onChange={(e)=>{this.handleStateChange(e)}}>
                                        <option value={''}>--Select State--</option>
                                        {states}
                                    </select>
                                </div>
                                <div className="col-sm-6 form-group">
                                    <label>District</label>
                                   <select className="form-control">
                                       <option value ={''}>--Select District--</option>
                                       {districts}
                                   </select>
                                </div>
                                <div className="col-sm-6 form-group">
                                    <label>Pin Code</label>
                                    <input type="text"
                                           placeholder="Enter Pincode Here.."
                                           className="form-control"
                                           value={pincode}

                                           onChange={(e)=>{this.handlePinCodeChange(e)}} />
                                </div>
                                <button type="button" className="btn btn-lg btn-info">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )

    }
}