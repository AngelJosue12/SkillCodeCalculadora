const Alexa = require('ask-sdk-core');

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const speakOutput = 'Hola amigito';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const SumaIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'sumaIntent';
    },
    handle(handlerInput) {
        const slots = handlerInput.requestEnvelope.request.intent.slots;
        const cantidad1 = slots.uno.value;
        const cantidad2 = slots.dos.value;

        if (!cantidad1 || !cantidad2) {
            return handlerInput.responseBuilder
                .speak('Lo siento, necesito dos números para hacer la suma. Por favor, inténtalo de nuevo.')
                .reprompt('Por favor dime dos números para sumar.')
                .getResponse();
        }

        const numero1 = parseFloat(cantidad1);
        const numero2 = parseFloat(cantidad2);

        if (isNaN(numero1) || isNaN(numero2)) {
            return handlerInput.responseBuilder
                .speak('Lo siento, no pude entender los números. Por favor, inténtalo de nuevo.')
                .reprompt('Por favor dime dos números para sumar.')
                .getResponse();
        }

        const resultado = numero1 + numero2;
        const speakOutput = `Amigito... El resultado de la suma de ${numero1} más ${numero2} es igual a ${resultado}.`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const RestaIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'restaIntent';
    },
    handle(handlerInput) {
        const slots = handlerInput.requestEnvelope.request.intent.slots;
        const cantidad1 = slots.uno.value;
        const cantidad2 = slots.dos.value;

        if (!cantidad1 || !cantidad2) {
            return handlerInput.responseBuilder
                .speak('Lo siento, necesito dos números para hacer la resta. Por favor, inténtalo de nuevo.')
                .reprompt('Por favor dime dos números para restar.')
                .getResponse();
        }

        const numero1 = parseFloat(cantidad1);
        const numero2 = parseFloat(cantidad2);

        if (isNaN(numero1) || isNaN(numero2)) {
            return handlerInput.responseBuilder
                .speak('Lo siento, no pude entender los números. Por favor, inténtalo de nuevo.')
                .reprompt('Por favor dime dos números para restar.')
                .getResponse();
        }

        const resultado = numero1 - numero2;
        const speakOutput = `Amigito... El resultado de la resta de ${numero1} menos ${numero2} es igual a ${resultado}.`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const PotenciaIntentHandler = {
    canHandle(handlerInput) {
        console.log("Checking if can handle PotenciaIntent");
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'potenciaIntent';
    },
    handle(handlerInput) {
        console.log("Handling PotenciaIntent");
        const slots = handlerInput.requestEnvelope.request.intent.slots;
        const baseSlot = slots.base;
        const exponenteSlot = slots.exponente;

        console.log(`baseSlot: ${JSON.stringify(baseSlot)}`);
        console.log(`exponenteSlot: ${JSON.stringify(exponenteSlot)}`);

        if (!baseSlot || !baseSlot.value || !exponenteSlot || !exponenteSlot.value) {
            return handlerInput.responseBuilder
                .speak('Lo siento, necesito una base y un exponente para calcular la potencia. Por favor, inténtalo de nuevo.')
                .reprompt('Por favor, dime la base y el exponente para calcular la potencia.')
                .getResponse();
        }

        const base = parseFloat(baseSlot.value);
        const exponente = parseFloat(exponenteSlot.value);

        if (isNaN(base) || isNaN(exponente)) {
            return handlerInput.responseBuilder
                .speak('Lo siento, no pude entender los números. Por favor, inténtalo de nuevo.')
                .reprompt('Por favor, dime la base y el exponente para calcular la potencia.')
                .getResponse();
        }

        const resultado = Math.pow(base, exponente);
        console.log(`Calculando potencia: ${base}^${exponente} = ${resultado}`);

        let speakOutput = `Amigito... El resultado de elevar ${base} a la ${exponente} es ${resultado}.`;

        // Manejo de casos especiales para una respuesta más natural
        if (exponente === 0) {
            speakOutput += ' Recuerda que cualquier número elevado a 0 es igual a 1.';
        } else if (exponente === 1) {
            speakOutput += ' Como el exponente es 1, el resultado es el mismo que la base.';
        } else if (exponente === 2) {
            speakOutput += ` Esto es lo mismo que multiplicar ${base} por sí mismo.`;
        }

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt('¿Quieres calcular otra potencia?')
            .getResponse();
    }
};

const MultiplicacionIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'multiplicacionIntent';
    },
    handle(handlerInput) {
        const slots = handlerInput.requestEnvelope.request.intent.slots;
        const cantidad1 = slots.uno.value;
        const cantidad2 = slots.dos.value;

        if (!cantidad1 || !cantidad2) {
            return handlerInput.responseBuilder
                .speak('Lo siento, necesito dos números para hacer la multiplicación. Por favor, inténtalo de nuevo.')
                .reprompt('Por favor dime dos números para multiplicar.')
                .getResponse();
        }

        const numero1 = parseFloat(cantidad1);
        const numero2 = parseFloat(cantidad2);

        if (isNaN(numero1) || isNaN(numero2)) {
            return handlerInput.responseBuilder
                .speak('Lo siento, no pude entender los números. Por favor, inténtalo de nuevo.')
                .reprompt('Por favor dime dos números para multiplicar.')
                .getResponse();
        }

        const resultado = numero1 * numero2;
        const speakOutput = `Amigito... El resultado de la multiplicación de ${numero1} por ${numero2} es igual a ${resultado}.`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const DivisionIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'divisionIntent';
    },
    handle(handlerInput) {
        const slots = handlerInput.requestEnvelope.request.intent.slots;
        const cantidad1 = slots.uno.value;
        const cantidad2 = slots.dos.value;

        if (!cantidad1 || !cantidad2) {
            return handlerInput.responseBuilder
                .speak('Lo siento, necesito dos números para hacer la división. Por favor, inténtalo de nuevo.')
                .reprompt('Por favor dime dos números para dividir.')
                .getResponse();
        }

        const numero1 = parseFloat(cantidad1);
        const numero2 = parseFloat(cantidad2);

        if (isNaN(numero1) || isNaN(numero2)) {
            return handlerInput.responseBuilder
                .speak('Lo siento, no pude entender los números. Por favor, inténtalo de nuevo.')
                .reprompt('Por favor dime dos números para dividir.')
                .getResponse();
        }

        if (numero2 === 0) {
            return handlerInput.responseBuilder
                .speak('Lo siento, no se puede dividir por cero. Por favor, inténtalo de nuevo.')
                .reprompt('Por favor dime dos números para dividir.')
                .getResponse();
        }

        const resultado = numero1 / numero2;
        const speakOutput = `Amigito... El resultado de la división de ${numero1} entre ${numero2} es igual a ${resultado}.`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const ValorAbsolutoIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'ValorAbsolutoIntent';
    },
    handle(handlerInput) {
        const slots = handlerInput.requestEnvelope.request.intent.slots;
        const numero = parseFloat(slots.numero.value);

        if (isNaN(numero)) {
            return handlerInput.responseBuilder
                .speak('Lo siento, no pude entender el número. Por favor, inténtalo de nuevo.')
                .reprompt('Por favor dime un número para calcular su valor absoluto.')
                .getResponse();
        }

        const resultado = Math.abs(numero);
        const speakOutput = `Amigito... El valor absoluto de ${numero} es ${resultado}.`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'You can say hello to me! How can I help?';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speakOutput = 'Goodbye!';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const FallbackIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.FallbackIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Sorry, I don\'t know about that. Please try again.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        console.log(`~~~~ Session ended: ${JSON.stringify(handlerInput.requestEnvelope)}`);
        return handlerInput.responseBuilder.getResponse();
    }
};

const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = Alexa.getIntentName(handlerInput.requestEnvelope);
        const speakOutput = `You just triggered ${intentName}`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        const speakOutput = 'Sorry, I had trouble doing what you asked. Please try again.';
        console.log(`~~~~ Error handled: ${JSON.stringify(error)}`);

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        SumaIntentHandler,
        RestaIntentHandler,
        MultiplicacionIntentHandler,
        DivisionIntentHandler,
        ValorAbsolutoIntentHandler,
        PotenciaIntentHandler, // Asegúrate de que esto esté aquí
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        FallbackIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler
    )
    .addErrorHandlers(
        ErrorHandler
    )
    .withCustomUserAgent('sample/hello-world/v1.2')
    .lambda();
