import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  connect() {
    document.addEventListener("turbo:before-cache", () => {
      window.location.reload();
    });
  }
}
