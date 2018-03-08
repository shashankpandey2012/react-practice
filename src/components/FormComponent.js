import React, { Component } from 'react';

export default class FormComponent extends Component {
    constructor(props){
        super(props);
        this._handleChange = this._handleChange.bind(this);
    }

    _handleChange(e, fieldName) {
        console.log("Step 1",e.target.value,fieldName);
        debugger;
        var formData = this.props.formData;
        formData[fieldName] = e.target.value;
        this.props.submitFormData(formData);
    }

    render() {
        console.log("Props Aa rhe hain",this.props);
        const { formData,stateData,districtData } = this.props;
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
                                               value={formData['firstname']}
                                               placeholder="Enter First Name Here.."
                                               className="form-control"
                                               onChange={(e)=>{this._handleChange(e,'firstname')}} />
                                    </div>
                                    <div className="col-sm-6 form-group">
                                        <label>Last Name</label>
                                        <input type="text"
                                               value={formData['lastname']}
                                               placeholder="Enter Last Name Here.."
                                               className="form-control"
                                               onChange={(e)=>{this._handleChange(e,'lastname')}}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6 form-group">
                                        <label>Age</label>
                                        <input type="number"
                                               value={formData['age']}
                                               placeholder="Enter Your Age Here.."
                                               className="form-control"
                                               onChange={(e)=>{this._handleChange(e,'age')}} />
                                    </div>
                                    {/*<div className="form-group">*/}
                                    {/*<label>Address</label>*/}
                                    {/*<textarea placeholder="Enter Address Here.." rows="3" className="form-control"/>*/}
                                    {/*</div>*/}
                                    <div className="col-sm-6 form-group">
                                        <label>Select Date</label>
                                        <input type="date"
                                               className="form-control"
                                               value={formData['calendar']}
                                               onChange={(e)=>{this._handleChange(e,'calendar')}} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6 form-group">
                                        <label>Address</label>
                                        <input type="text"
                                               placeholder="Enter Address Here.."
                                               className="form-control"
                                               value={formData['address']}
                                               onChange={(e)=>{this._handleChange(e,'address')}} />
                                    </div>
                                    <div className="col-sm-6 form-group">
                                        <label>Line 1</label>
                                        <input type="text"
                                               placeholder="Enter Address Here.."
                                               className="form-control"
                                               value={formData['line1']}
                                               onChange={(e)=>{this._handleChange(e,'line1')}} />
                                    </div>
                                </div>
                                <div className=" col-sm-6 form-group">
                                    <label>Building</label>
                                    <input type="text"
                                           placeholder="Enter Address Here.."
                                           className="form-control"
                                           value={formData['building']}
                                           onChange={(e)=>{this._handleChange(e,'building')}} />
                                </div>
                                <div className="col-sm-6 form-group">
                                    <label>State</label>
                                    <select className="form-control" onChange={(e)=>{this._handleChange(e,'state')}}>
                                        <option value={''}>--Select State--</option>
                                        {states}
                                    </select>
                                </div>
                                <div className="col-sm-6 form-group">
                                    <label>District</label>
                                    <select className="form-control" onChange={(e)=>{this._handleChange(e,'district')}}>
                                        <option value ={''}>--Select District--</option>
                                        {districts}
                                    </select>
                                </div>
                                <div className="col-sm-6 form-group">
                                    <label>Pin Code</label>
                                    <input type="text"
                                           placeholder="Enter Pincode Here.."
                                           className="form-control"
                                           value={formData['pincode']}
                                           onChange={(e)=>{this._handleChange(e,'pincode')}} />
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
