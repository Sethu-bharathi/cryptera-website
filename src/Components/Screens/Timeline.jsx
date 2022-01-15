import React from 'react'
import { Chrono } from "react-chrono";
import '../../Styles/Timeline.css'
import google_calendar from '../../Assets/Icons/calendar.svg'
function Timeline() {
  const items = [
    {
      title: "Github",
      cardTitle: "GitHub, Inc.",
      cardSubtitle:
        "GitHub, Inc. is an American multinational corporation that provides hosting for software development and version control using Git."
    },
    {
      title: "list",
      cardTitle: "",
      cardSubtitle: ``
    },
    {
      title: "text",
      cardTitle: "",
      cardSubtitle: ``
    },
    {
      title: "Table",
      cardTitle: "A Table",
      cardSubtitle: ``
    }
  ];

  return (
    <div className='timeline'>
      <div className='timeline-header'>
        <div className='title'>Timeline</div>
        <div className='add'>
          <img src={google_calendar} />
        </div>
      </div>

      <div style={{ width: "100%", height: "70vh" }} className='timeline-component'>
        <Chrono
        timelineCircleDimension={20}
          theme={
            {
              cardBgColor: "rgba(0,0,0,0.2)",
              primary: "var(--fg-green)",
              secondary: "red",
              textColor: "green",
              titleColor: "green",
              cardForeColor: "white"
            }
          }
          items={items}
          mode="VERTICAL_ALTERNATING"
          hideControls
          scrollable={{scrollbar:false}}
        >
          <div className="chrono-icons">
          <i className='fa fas-twitter'></i>
            <img
              src="https://img.icons8.com/ios-filled/100/000000/about.png"
              alt="twitter"
            />
            <img
              src="https://img.icons8.com/ios-filled/100/000000/contacts.png"
              alt="twitter"
            />
            <img
              src="https://img.icons8.com/ios-filled/100/000000/briefcase.png"
              alt="twitter"
            />
            <img
              src="https://img.icons8.com/ios-filled/100/000000/idea.png"
              alt="twitter"
            />

          </div>
          <div>
            <div style={{ width: "130px", height: "250px" }}>
              <img
                style={{ maxWidth: "100%", maxHeight: "100%" }}
                alt="test"
                src="https://cdn.tutsplus.com/net/uploads/2013/08/github-collab-retina-preview.gif"
              />
            </div>
          </div>
          <div style={{ backgroundColor: "red" }}>
            <h3>This is a List</h3>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item 4</li>
            </ul>
          </div>
          <div>
            <h3>Dunkirk</h3>
            <p>
              The Battle of Dunkirk (French: Bataille de Dunkerque) was fought
              in Dunkirk (Dunkerque), France, during the Second World War,
              between the Allies and Nazi Germany. As the Allies were losing the
              Battle of France on the Western Front, the Battle of Dunkirk was
              the defence and evacuation to Britain of British and other Allied
              forces in Europe from 26 May to 4 June 1940.
            </p>
            <p>
              After the Phoney War, the Battle of France began in earnest on 10
              May 1940. To the east, the German Army Group B invaded the
              Netherlands and advanced westward. In response, the Supreme Allied
              Commander—French General Maurice Gamelin—initiated "Plan D" and
              entered Belgium to engage the Germans in the Netherlands. The plan
              relied heavily on the Maginot Line fortifications along the
              German–French border, but German forces had already crossed
              through most of the Netherlands before the French forces arrived.
              Gamelin instead committed the forces under his command, three
              mechanised armies, the French First and Seventh Armies and the
              British Expeditionary Force (BEF), to the River Dyle.
            </p>
          </div>
          <div style={{ margin: "1rem", background: "var(--bg-black)" }}>
            <h3>Table</h3>
            <table>
              <thead>
                <tr>
                  <td>Column 1</td>
                  <td>Column 2</td>
                  <td>Column 3</td>
                  <td>Column 4</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Value 1</td>
                  <td>Value 2</td>
                  <td>Value 3</td>
                  <td>Value 4</td>
                </tr>
                <tr>
                  <td>Value 5</td>
                  <td>Value 6</td>
                  <td>Value 7</td>
                  <td>Value 8</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Chrono>
      </div>
    </div>
  )
}

export default Timeline

