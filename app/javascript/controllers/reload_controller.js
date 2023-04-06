import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  connect() {
    this.reloadPage = this.reloadPage.bind(this);

    window.addEventListener("popstate", this.reloadPage);
    document.addEventListener("turbo:before-cache", this.reloadPage);
  }

  disconnect() {
    window.removeEventListener("popstate", this.reloadPage);
    document.removeEventListener("turbo:before-cache", this.reloadPage);
  }

  reloadPage() {
    window.location.reload();
  }
}
