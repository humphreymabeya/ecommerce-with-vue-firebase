const functions = require('firebase-functions');
const stripe = require('stripe')('sk_test_H4Psa65bkCc9n3Tkj9QoWZwl00lpf7jcRJ');
const cors = require('cors')({origin: true});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});

exports.CheckoutSession = functions.https.onRequest((request, response) => {
    cors(req, res, () => {
        stripe.checkout.sessions.create(
                {
                success_url: 'https://example.com/success',
                cancel_url: 'https://example.com/cancel',
                payment_method_types: ['card'],
                line_items: [
                    {
                    price: 'price_H5ggYwtDq4fbrJ',
                    quantity: 2,
                    },
                ],
                },
                function(err, session) {
                // asynchronously called
                response.send(session);
                }
            );
    });
    
});
   
