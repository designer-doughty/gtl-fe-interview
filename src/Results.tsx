import './Results.css'

enum Quality {
  High = "high",
  Medium = "medium",
  Low = "low",
}

// The numbering represents the order the events are expected to occur,
// First is the baseline, then the follow-up, and finally the conclusion.
// All event's may not be present, but when they are, the earlier event will always be present.
enum Event {
    Baseline = "Baseline",
    FollowUp = "FollowUp",
    Conclusion = "Conclusion"
}

interface Result {
  patientId: string; // the client specific identifier
  scannedAt: Date; // the time at which the sample was digitally scanned
  score: number; // the score of the sample
  event: Event; // the event that the sample was taken at
  sampleQuality: Quality; // the quality of the sample
  dateOfBirth: string; // the date of birth of the patient
}

// please do not edit the data, unless to add further examples
const data: Result[] = [
  {
    patientId: "87gd2",
    scannedAt: new Date("2021-08-03T12:00:00Z"),
    score: 0.81,
    event: Event.FollowUp,
    sampleQuality: Quality.Low,
    dateOfBirth: "1990-01-01",
  },
  {
    patientId: "87gd2",
    scannedAt: new Date("2021-08-01T12:00:00Z"),
    score: 0.92,
    event: Event.Baseline,
    sampleQuality: Quality.High,
    dateOfBirth: "1990-01-01",
  },
  {
    patientId: "87gd2",
    scannedAt: new Date("2021-08-08T12:00:00Z"),
    score: 0.43,
    event: Event.Conclusion,
    sampleQuality: Quality.Low,
    dateOfBirth: "1990-01-01",
  },
  {
    patientId: "js27h",
    scannedAt: new Date("2021-08-02T12:00:00Z"),
    score: 0.74,
    event: Event.Baseline,
    sampleQuality: Quality.Medium,
    dateOfBirth: "1993-02-12",
  },
  {
    patientId: "9782e",
    scannedAt: new Date("2021-08-03T12:00:00Z"),
    score: 0.25,
    event: Event.Baseline,
    sampleQuality: Quality.Medium,
    dateOfBirth: "1981-04-12",
  },
  {
    patientId: "9782e",
    scannedAt: new Date("2021-08-21T12:00:00Z"),
    score: 0.21,
    event: Event.FollowUp,
    sampleQuality: Quality.High,
    dateOfBirth: "1981-04-12",
  },
];

export default function Results() {

  return (
    <div className="results">
      {data.map((item) => {
        return (
          <>
          <div className="entry">

            <h4 className="event">{item.event}</h4>

            <h2 className="headline score">
              {item.score}
            </h2>

            <span className="date">
              <h4 className="label">Scanned At:</h4>
              {/* Current locale set to GB - dd/mm/yyyy */}
              <p>{item.scannedAt.toLocaleDateString("en-GB")}</p>
            </span>

            <span className="quality">
              <h4 className="label">Sample Quality:</h4>
              <p style={{
                color:
                  item.sampleQuality === "high"
                    ? "green"
                    : item.sampleQuality === "medium"
                    ? "orange"
                    : item.sampleQuality == "low"
                    ? "red"
                    : "",
              }}
              >{item.sampleQuality}</p>
            </span>

            

            <span className="id">
              <h4 className="label">Patient ID:</h4>
              <p onClick={() => navigator.clipboard.writeText(item.patientId)} id="patientID">{item.patientId}</p>

            </span>

          </div>
              {/* Commented out as could be considered Protected Health Information but could be used later on? */}
            {/* <p>Date of Birth: {item.dateOfBirth}</p> */}
          </>
        );
      })}
    </div>
  );
}
