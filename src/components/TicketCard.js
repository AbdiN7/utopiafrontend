import React from 'react';
import TicketList from './TicketList';

class TicketCard extends React.Component{
    constructor(props){
        super();
        console.log("These are the props");
        console.log(props);
        this.tickets = props.tickets;
        this.props = props;
        this.contents = ''
    }

    theContents(tickets){
        return <TicketList ticket = {tickets}/>;
    }

    render(){
        return(
            <div>
                {this.props.props.map(this.theContents, this)}
            </div>
        )
    }
}

export default TicketCard;