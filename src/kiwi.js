import { Heading } from './components/heading/heading';
import { KiwiImage } from './components/kiwi-image/kiwi-image';

const body = document.querySelector('body');

// Heading
body.appendChild(new Heading().render('Kiwi'));

// Image
body.appendChild(new KiwiImage().render());
