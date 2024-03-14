function encrypt(message){
    
    console.log(message)
    message=message.replaceAll("e", "enter");
    message=message.replaceAll("i", "imes");
    message=message.replaceAll("a", "ai");
    message=message.replaceAll("o", "ober");
    message=message.replaceAll("u", "ufat");
    
    return message;
}

function decrypt(message){

    message=message.replaceAll("enter", "e");
    message=message.replaceAll("imes", "i");
    message=message.replaceAll("ai", "a");
    message=message.replaceAll("ober", "o");
    message=message.replaceAll("ufat", "u");
    
    return message;

}

