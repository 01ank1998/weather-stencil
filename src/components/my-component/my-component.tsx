import { Component, h, State } from "@stencil/core";

@Component({
  tag: "my-component",
  styleUrl: "my-component.css",
  shadow: true,
  assetsDirs: ["assets"],
})
export class MyComponent {
  @State() temperature;
  @State() moreDetail;

  componentWillLoad() {
    fetch(
      `https://api.openweathermap.org/data/2.5/find?q=mumbai&appid=0157170848082c20ae5f9ec87c93184e&units=metric`
    )
      .then((response: Response) => response.json())
      .then((response) => {
        this.temperature = response.cod;
      });
  }

  handleClick() {
    this.moreDetail = !this.moreDetail;
  }

  render() {
    return (
      <div class="card">
        <div
          style={{
            'background-color':'black',
            'height': "100%",
          }}
        >
          <div class="toggle">
            <label>Temperature in Fahreneit</label>
          </div>
          <div class="content">
            <h1>Bangalore</h1>
            <h2>
              {this.temperature} <span>&#8451;</span>
            </h2>
            <h1 onClick={() => this.handleClick()} class="blink_me">
              Click me
            </h1>
          </div>
        </div>
        {this.moreDetail && (
          <div style={{ "background-color": "black", "font-size": "2rem" }}>
            Bengaluru (also called Bangalore) is the capital of India's southern
            Karnataka state. The center of India's high-tech industry, the city
            is also known for its parks and nightlife. By Cubbon Park, Vidhana
            Soudha is a Neo-Dravidian legislative building. Former royal
            residences include 19th-century Bangalore Palace, modeled after
            England’s Windsor Castle, and Tipu Sultan’s Summer Palace, an
            18th-century teak structure.
          </div>
        )}
      </div>
    );
  }
}
