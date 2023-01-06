const AppError = require('../../../misc/AppError');
const commonErrors = require('../../../misc/commonErrors');

const checkCreatable = (from) => (req, res, next) => {
    const {title, content} = req[from];

    if (title === undefined) {
        next(
            new AppError(
                commonErrors.inputError,
                400,
                `${from}: title은 필수값입니다.`
            )
        );
    }

    if (content === undefined) {
        next(
            new AppError(
                commonErrors.inputError,
                400,
                `${from}: content은 필수값입니다.`
            )
        );
    }

    // title 글자 수 제한
    if (title.length > 50) {
        next(
            new AppError(
                commonErrors.inputError,
                400,
                `${from}: title은 50자 까지만 허용합니다.`
            )
        );
    }

    // content 글자 수 제한
    if (content.length > 300) {
        next(
            new AppError(
                commonErrors.inputError,
                400,
                `${from}: content는 300자 까지만 허용합니다.`
            )
        );
    }

    next();
};

module.exports = {
    checkCreatable
};