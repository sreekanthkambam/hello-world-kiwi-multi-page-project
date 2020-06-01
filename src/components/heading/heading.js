import _ from 'lodash';
import './heading.css';

export class Heading {

    render(headingName) {
        const h1 = document.createElement('h1');
        h1.innerHTML = _.upperCase(headingName);
        return h1;
    }
    
}