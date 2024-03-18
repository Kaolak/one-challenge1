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

    message=message.replaceAll("enter", "E");
    message=message.replaceAll("imes", "I");
    message=message.replaceAll("ai", "A");
    message=message.replaceAll("ober", "O");
    message=message.replaceAll("ufat", "U");
    message=message.toLowerCase();
    return message;

}

