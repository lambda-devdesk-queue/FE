import React, { Component } from "react";

const ProfileList = ({profiles}) => (
    <select>
        <option value="-----">----</option>
        {profiles.map(profile => <option value={profile.name}>{profile.name}</option>)}
    </select>
);


class DashboardAdmin extends Component {

    constructor(){
        super();
        this.state = {
            "profiles": [],
        };
        this.request_data = {}
    };

    componentDidMount(){
        fetch("http://localhost:8000/api/profiles/")
            .then(response => response.json())
            .then(response => this.setState({ profiles: response}))
    }

    submit_task(data) {
        fetch("http://localhost:8000/api/tasks/",
            {
                method: "POST",
                cache: "no-cache",
                headers:{
                    "content_type": "application/json"
                },
                body: JSON.stringify(data)
            })
            .then(response=> response.json())

    }

    render() {
        return (
            <div>
                <h2>Submit Job</h2>
                <form id="submit_job">
                    <label>
                        Material ID:
                        <input type="text" name="material_id"/>
                    </label>
                    <br/>
                    <label>
                        Transcode Profile:
                        <ProfileList profiles={this.state.profiles}/>
                    </label>
                    <br/>
                    <label>
                        Start Date:
                        <input type="text" name="start_date"/>
                    </label>
                    <br/>
                    <label>
                        End Date:
                        <input type="text" name="end_date"/>
                    </label>
                    <br/>
                </form>
                <button onClick={this.submit_task(this.request_data)}>Submit</button>
            </div>

        );
    }
}

export default DashboardAdmin;