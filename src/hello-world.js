import { Heading } from './components/heading/heading';
import { HelloWorldButton } from './components/hello-world-button/hello-world-button';

const body = document.querySelector('body');

// Heading
body.appendChild(new Heading().render('Hello World'));

// Button
body.appendChild(new HelloWorldButton().render());
