const sendResponse = (res, statusCode, data, message) => {
	let status;
	//regex pattern validate status should be 3 digits
	const digitsOfStatusCode = /^[0-9]{3}$/;
  
	//check the statusCode is 3 digit number 
	if(!digitsOfStatusCode.test(statusCode)){
		throw new Error('Status code should be three digit number');
	}
  
	//regex status code start with 2
	const pattern = /^2\d{2}$/;
  
	//check if pattern is start with 2 or not
	pattern.test(statusCode) ? status = 'success' : status = 'Fail';
  
	return res.status(statusCode).json({
		data,
		status,
		message
	});

};

module.exports = sendResponse;