class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      if (message.includes("hello")) {
        this.actionProvider.greet();
      } else {
        this.actionProvider.defaultResponse();
      }
    }
  }
  
  export default MessageParser;
  