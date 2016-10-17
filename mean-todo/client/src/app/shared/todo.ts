export class Todo {
  _id: string;
  text: string;
  isCompleted: boolean;

  constructor(text) {
    this.text = text;
    this.isCompleted = false;
  }
}
