/* Request - Simplified HTTP client
 * Readmore: https://github.com/request/request
 */
var request = require('request');

/*
 * Constants
 */
var TOPA_API_MAINNET_URL = 'https://api.toppay.io';
var TOPA_API_TESTNET_URL = 'https://testnet-api.toppay.io';


/*
 * Function Payment
 * Pararms[]
 * 		_from: Address send
 * 		_to: Address received
 *		_amount: Amount
 *		_confirmation_token: Private key of transaction
 */
function payment(_from, _to, _amount, _confirmation_token) {
    var formData = {
        address_from: _from,
        address_to: _to,
        amount: _amount,
        confirmation_token: _confirmation_token
    }

    request.post({ url: TOPA_API_MAINNET_URL + '/wallet/withdrawal', formData: formData }, function optionalCallback(err, httpResponse, body) {
        if (err) {
            return console.error('Withdrawal TOPA Fail:', err);
        }
        console.log('Withdrawal successful!  Server responded with:', body);
    });

}