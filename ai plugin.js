/**
 * @name AutoMentionPlugin
 * @author YourName
 * @version 1.0.0
 * @description Автоматически добавляет упоминание пользователя при ответе.
 */

module.exports = class AutoMentionPlugin {
    start() {
        document.addEventListener("keydown", this.onKeyDown);
    }

    stop() {
        document.removeEventListener("keydown", this.onKeyDown);
    }

    onKeyDown(e) {
        if (e.key === "Enter" && !e.shiftKey && !e.ctrlKey) {
            const textarea = document.querySelector("textarea");
            const mentionedUser = document.querySelector("[aria-selected='true']");
            if (textarea && mentionedUser) {
                const userId = mentionedUser.getAttribute("data-user-id");
                if (userId) {
                    textarea.value = `@${mentionedUser.innerText} ` + textarea.value;
                }
            }
        }
    }

    getName() { return "AutoMentionPlugin"; }
    getDescription() { return "Автоматически добавляет упоминание пользователя при ответе."; }
    getVersion() { return "1.0.0"; }
    getAuthor() { return "YourName"; }
};
