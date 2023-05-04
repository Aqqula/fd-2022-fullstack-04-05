class ApplicationError extends Error{
    constructor(status,message){
        super();
        this.name = this.constructor.name;
        this.status = status || 500;
        this.message = message || 'ApplicationError';
    }
}

module.exports = ApplicationError;