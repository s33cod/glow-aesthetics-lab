import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "./button";

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm here to help you with your beauty journey. How can I assist you today?",
      sender: "bot",
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = () => {
    if (!inputMessage.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      text: inputMessage,
      sender: "user" as const,
    };

    setMessages([...messages, newMessage]);
    setInputMessage("");

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: "Thank you for your message! For immediate assistance, please call us at +44 7904 949580 or book an appointment online. Our team will get back to you shortly!",
        sender: "bot" as const,
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      <Button
        onClick={toggleChat}
        className="fixed bottom-4 left-4 z-50 bg-gold hover:bg-[#fb0090] text-white p-3 rounded-full shadow-lg transition-all duration-300"
        size="icon"
      >
        <MessageCircle className="h-5 w-5" />
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 left-4 z-50 w-80 bg-background border border-gold/20 rounded-xl shadow-xl">
          {/* Header */}
          <div className="flex items-center justify-between p-4 bg-gold rounded-t-xl">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <MessageCircle className="h-4 w-4 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm">
                  Glow Assistant
                </h3>
                <p className="text-white/80 text-xs">Online now</p>
              </div>
            </div>
            <Button
              onClick={toggleChat}
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/10 h-8 w-8"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Messages */}
          <div className="h-64 overflow-y-auto p-4 space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg text-sm ${
                    message.sender === "user"
                      ? "bg-gold text-white"
                      : "bg-muted text-foreground"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gold/20">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 text-sm border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-gold/20"
              />
              <Button
                onClick={sendMessage}
                size="icon"
                className="bg-gold hover:bg-[#fb0090] text-white h-9 w-9"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              For immediate assistance, call{" "}
              <a href="tel:+447904949580" className="text-gold hover:underline">
                +44 7904 949580
              </a>
            </p>
          </div>
        </div>
      )}
    </>
  );
}
