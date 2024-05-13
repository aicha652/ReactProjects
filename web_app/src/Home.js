const Home = () => {
    return ( 
        <div className="Home">
            <h2>HomePage</h2> <br></br>
            <ExampleTwo Name="ali" Age="22" Job="Front-End"/>
            <ExampleTwo Name="ahmed" Age="24" Job="Back-End"/>
            <ExampleTwo Name="mohamed" Age="26" Job="FullStack"/>
        </div>
    );
}

const ExampleTwo = (props) => {
    return ( 
        <div>
            <h3>Name: {props.Name}</h3><br></br>
            <h3>Age: {props.Age}</h3><br></br>
            <h3>Job: {props.Job}</h3><br></br>
        </div>
    );
}
 
export default Home;