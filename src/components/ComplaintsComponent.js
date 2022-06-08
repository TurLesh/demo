import React from 'react';

const Complaints = () => {
    return(
        <>
            <div>That is Complaints page</div>
        </>        
    )
}

class Issues{
    constructor(){
        this.issues = []
    }

    reply(issue){}

    add(issue){
        this.issues.push(issue)
        return this.reply(issue)
    }
}

class HomeIssues extends Issues{
    reply({id, customer, details}) {
        return `Home: ${id}: ${customer} (${details})`
    }
}

class OtherIssues extends Issues{
    reply({id, customer, details}) {
        return `Other: ${id}: ${customer} (${details})`
    }
}

// Facade class here

class IssueRegistry {
    register(customer, type, details){
        const id = Date.now()
        let issue

        if (type === 'home'){
            issue = new HomeIssues()
        }
        else{
            issue = new OtherIssues()
        }

        return issue.add({id, customer, details})

    }

}

const registry = new IssueRegistry()

console.log(registry.register('Valera', 'home', 'need help'))

export default Complaints;