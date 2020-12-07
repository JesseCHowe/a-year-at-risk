const data = [
  {
    x: 0,
    y: 0,
    key: "AK",
    name: "Alaska",
    totalBeds: 1583,
    twenty: 747,
    forty: 1493,
    sixty: 2240
  },
  {
    x: 10,
    y: 0,
    key: "ME",
    name: "Maine",
    totalBeds: 3310,
    twenty: 1518,
    forty: 3036,
    sixty: 4554
  },
  {
    x: 9,
    y: 1,
    key: "VT",
    name: "Vermont",
    totalBeds: 1305,
    twenty: 709,
    forty: 1418,
    sixty: 2127
  },
  {
    x: 10,
    y: 1,
    key: "NH",
    name: "New Hampshire",
    totalBeds: 2598,
    twenty: 1492,
    forty: 2983,
    sixty: 4475
  },
  {
    x: 9,
    y: 2,
    key: "MA",
    name: "Massachusetts",
    totalBeds: 13759,
    twenty: 7512,
    forty: 15024,
    sixty: 22536
  },
  {
    x: 0,
    y: 2,
    key: "WA",
    name: "Washington",
    totalBeds: 11808,
    twenty: 7688,
    forty: 15375,
    sixty: 23063
  },
  {
    x: 2,
    y: 2,
    key: "MT",
    name: "Montana",
    totalBeds: 3667,
    twenty: 1130,
    forty: 2259,
    sixty: 3389
  },
  {
    x: 3,
    y: 2,
    key: "ND",
    name: "North Dakota",
    totalBeds: 3371,
    twenty: 796,
    forty: 1593,
    sixty: 2389
  },
  {
    x: 3,
    y: 3,
    key: "SD",
    name: "South Dakota",
    totalBeds: 4247,
    twenty: 900,
    forty: 1800,
    sixty: 2700
  },
  {
    x: 4,
    y: 2,
    key: "MN",
    name: "Minnesota",
    totalBeds: 13423,
    twenty: 5835,
    forty: 11669,
    sixty: 17504
  },
  {
    x: 5,
    y: 1,
    key: "WI",
    name: "Wisconsin",
    totalBeds: 11669,
    twenty: 6229,
    forty: 12458,
    sixty: 18687
  },
  {
    x: 6,
    y: 2,
    key: "MI",
    name: "Michigan",
    totalBeds: 24286,
    twenty: 10773,
    forty: 21545,
    sixty: 32318
  },
  {
    x: 8,
    y: 2,
    key: "NY",
    name: "New York",
    totalBeds: 51713,
    twenty: 21659,
    forty: 43318,
    sixty: 64977
  },
  {
    x: 9,
    y: 3,
    key: "CT",
    name: "Connecticut",
    totalBeds: 6894,
    twenty: 3952,
    forty: 7903,
    sixty: 11855
  },
  {
    x: 10,
    y: 3,
    key: "RI",
    name: "Rhode Island",
    totalBeds: 2117,
    twenty: 1179,
    forty: 2358,
    sixty: 3536
  },
  {
    x: 0,
    y: 3,
    key: "OR",
    name: "Oregon",
    totalBeds: 6789,
    twenty: 4419,
    forty: 8837,
    sixty: 13256
  },
  {
    x: 1,
    y: 2,
    key: "ID",
    name: "Idaho",
    totalBeds: 3267,
    twenty: 1702,
    forty: 3405,
    sixty: 5107
  },
  {
    x: 2,
    y: 3,
    key: "WY",
    name: "Wyoming",
    totalBeds: 1951,
    twenty: 617,
    forty: 1234,
    sixty: 1850
  },
  {
    x: 3,
    y: 4,
    key: "NE",
    name: "Nebraska",
    totalBeds: 5872,
    twenty: 1980,
    forty: 3961,
    sixty: 5941
  },
  {
    x: 4,
    y: 3,
    key: "IA",
    name: "Iowa",
    totalBeds: 9309,
    twenty: 3344,
    forty: 6688,
    sixty: 10032
  },
  {
    x: 5,
    y: 2,
    key: "IL",
    name: "Illinois",
    totalBeds: 30006,
    twenty: 13705,
    forty: 27409,
    sixty: 41114
  },
  {
    x: 5,
    y: 3,
    key: "IN",
    name: "Indiana",
    totalBeds: 17433,
    twenty: 6993,
    forty: 13986,
    sixty: 20979
  },
  {
    x: 6,
    y: 3,
    key: "OH",
    name: "Ohio",
    totalBeds: 28127,
    twenty: 12546,
    forty: 25092,
    sixty: 37639
  },
  {
    x: 7,
    y: 3,
    key: "PA",
    name: "Pennsylvania",
    totalBeds: 32817,
    twenty: 14177,
    forty: 28353,
    sixty: 42530
  },
  {
    x: 8,
    y: 3,
    key: "NJ",
    name: "New Jersey",
    totalBeds: 20450,
    twenty: 9674,
    forty: 19348,
    sixty: 29022
  },
  {
    x: 0,
    y: 4,
    key: "CA",
    name: "California",
    totalBeds: 68554,
    twenty: 41094,
    forty: 82187,
    sixty: 123281
  },
  {
    x: 1,
    y: 3,
    key: "NV",
    name: "Nevada",
    totalBeds: 5610,
    twenty: 3075,
    forty: 6151,
    sixty: 9226
  },
  {
    x: 1,
    y: 4,
    key: "UT",
    name: "Utah",
    totalBeds: 4869,
    twenty: 2832,
    forty: 5665,
    sixty: 8497
  },
  {
    x: 2,
    y: 4,
    key: "CO",
    name: "Colorado",
    totalBeds: 9620,
    twenty: 5749,
    forty: 11498,
    sixty: 17248
  },
  {
    x: 3,
    y: 5,
    key: "KS",
    name: "Kansas",
    totalBeds: 9120,
    twenty: 3038,
    forty: 6077,
    sixty: 9115
  },
  {
    x: 4,
    y: 4,
    key: "MO",
    name: "Missouri",
    totalBeds: 17087,
    twenty: 6541,
    forty: 13082,
    sixty: 19623
  },
  {
    x: 5,
    y: 4,
    key: "KY",
    name: "Kentucky",
    totalBeds: 13150,
    twenty: 4748,
    forty: 9495,
    sixty: 14243
  },
  {
    x: 6,
    y: 4,
    key: "WV",
    name: "West Virginia",
    totalBeds: 6224,
    twenty: 2062,
    forty: 4125,
    sixty: 6187
  },
  {
    x: 8,
    y: 4,
    key: "MD",
    name: "Maryland",
    totalBeds: 11249,
    twenty: 6426,
    forty: 12852,
    sixty: 19278
  },
  {
    x: 9,
    y: 4,
    key: "DE",
    name: "Delaware",
    totalBeds: 1864,
    twenty: 1039,
    forty: 2077,
    sixty: 3116
  },
  {
    x: 1,
    y: 5,
    key: "AZ",
    name: "Arizona",
    totalBeds: 12868,
    twenty: 7272,
    forty: 14543,
    sixty: 21815
  },
  {
    x: 2,
    y: 5,
    key: "NM",
    name: "New Mexico",
    totalBeds: 3460,
    twenty: 2218,
    forty: 4437,
    sixty: 6655
  },
  {
    x: 3,
    y: 6,
    key: "OK",
    name: "Oklahoma",
    totalBeds: 10781,
    twenty: 4088,
    forty: 8175,
    sixty: 12263
  },
  {
    x: 4,
    y: 5,
    key: "AR",
    name: "Arkansas",
    totalBeds: 8428,
    twenty: 3180,
    forty: 6359,
    sixty: 9539
  },
  {
    x: 5,
    y: 5,
    key: "TN",
    name: "Tennessee",
    totalBeds: 8428,
    twenty: 7101,
    forty: 14203,
    sixty: 21304
  },
  {
    x: 7,
    y: 4,
    key: "VA",
    name: "Virginia",
    totalBeds: 17469,
    twenty: 8985,
    forty: 17970,
    sixty: 26956
  },
  {
    x: 6,
    y: 5,
    key: "NC",
    name: "North Carolina",
    totalBeds: 21065,
    twenty: 10792,
    forty: 21585,
    sixty: 32377
  },
  {
    x: 3,
    y: 7,
    key: "TX",
    name: "Texas",
    totalBeds: 55588,
    twenty: 27632,
    forty: 55263,
    sixty: 82895
  },
  {
    x: 4,
    y: 6,
    key: "LA",
    name: "Louisiana",
    totalBeds: 13881,
    twenty: 4913,
    forty: 9826,
    sixty: 14739
  },
  {
    x: 5,
    y: 6,
    key: "MS",
    name: "Mississippi",
    totalBeds: 11877,
    twenty: 3139,
    forty: 6279,
    sixty: 9418
  },
  {
    x: 6,
    y: 6,
    key: "AL",
    name: "Alabama",
    totalBeds: 13959,
    twenty: 5230,
    forty: 10460,
    sixty: 15691
  },
  {
    x: 7,
    y: 6,
    key: "GA",
    name: "Georgia",
    totalBeds: 23831,
    twenty: 10580,
    forty: 21160,
    sixty: 31740
  },
  {
    x: 7,
    y: 5,
    key: "SC",
    name: "South Carolina",
    totalBeds: 11457,
    twenty: 5320,
    forty: 10640,
    sixty: 15960
  },
  {
    x: 8,
    y: 5,
    key: "DC",
    name: "District of Columbia",
    totalBeds: 2405,
    twenty: 753,
    forty: 1505,
    sixty: 2258
  },
  {
    x: 0,
    y: 7,
    key: "HI",
    name: "Hawaii",
    totalBeds: 2623,
    twenty: 1562,
    forty: 3124,
    sixty: 4686
  },
  {
    x: 8,
    y: 7,
    key: "FL",
    name: "Florida",
    totalBeds: 51190,
    twenty: 22965,
    forty: 45930,
    sixty: 68895
  },
  {
    x: 10,
    y: 7,
    key: "PR",
    name: "Puerto Rico",
    totalBeds: 7769,
    twenty: 3866,
    forty: 7733,
    sixty: 11599
  }
];

const dimensions = {
  width: 70,
  height: 70
};

const svg = d3.select("svg"),
  tooltip = d3.select("body").append("div").attr("class", "toolTip"),
  margin = { top: 20, right: 20, bottom: 30, left: 20 },
  width = +svg.attr("width") - margin.left - margin.right,
  height = +svg.attr("height") - margin.top - margin.bottom,
  color = d3
    .scaleLinear() 
    .domain([0, 0.5, 1, 1.5, 2, 2.01])
    .range(["#fff", "#f3dfc0", "#d6556d", "#a64255", "#6b2b37", "#000"]),
  formatDecimalComma = d3.format(",.0f");

let mode = "twenty";

const usMap = svg
  .append("g")
  .selectAll("g")
  .data(data)
  .enter()
  .append("g")
  .attr("id", (d) => d.key)
  .attr(
    "transform",
    (d) => `translate(${d.x * dimensions.width}, ${d.y * dimensions.height})`
  )
  .on("mousemove", (event, d) => {
    const w = window.innerWidth,
      h = window.innerHeight;
    tooltip
      .style("display", "inline-block")
      .html(
        `<strong>${
          d.name
        }</strong><br/>Beds Needed: <strong>${formatDecimalComma(
          d[mode]
        )}</strong><br/>Percent of available beds: <span style='color:${color(
          d[mode] / d.totalBeds
        )}; font-weight: 600'>${((d[mode] / d.totalBeds) * 100).toFixed(
          2
        )}%</span>`
      );
    tooltip.style("left", "auto").style("top", "auto").style("bottom", "auto");
    if (w > 400) {
      tooltip.style("top", event.pageY + 10 + "px");
      event.pageX < w / 2
        ? tooltip.style("left", event.pageX + 10 + "px")
        : tooltip.style("left", event.pageX - 212 + "px");
    } else {
      tooltip.style("bottom", 0).style("left", 0);
    }
  })
  .on("mouseout", () => {
    tooltip.style("display", "none");
  });

usMap
  .append("rect")
  .attr("class", "stateRect")
  .attr("width", dimensions.width)
  .attr("height", dimensions.height)
  .style("fill", (d) => color(d[mode] / d.totalBeds))
  .style("stroke", "#fff")
  .style("stroke-width", 2);

usMap
  .append("text")
  .attr("class", "stateText")
  .attr("x", dimensions.width / 2)
  .attr("y", dimensions.height / 1.65)
  .style("text-anchor", "middle")
  .style("pointer-events", "none")
  .text((d) => d.key)
  .style("fill", (d) => (d.twenty / d.totalBeds > 1.3 ? "#fff" : "#000"));

svg.selectAll(".scale")
  .data([0,0.5,1,1.5,2,2.5])
  .enter()
  .append("rect")
  .attr('x',(d,i) => 200 + (i * 54))
  .attr('y', 630)
  .attr('width',50)
  .attr('height',20)
  .style('fill',d => color(d));

svg.append('text')
.attr('x',280)
.attr('y', 600)
.text('Percentage of Beds Filled')
svg.selectAll(".scale")
  .data(['0','50%','100%','150%','200%','>200%'])
  .enter()
  .append("text")
  .attr('x',(d,i) => 200 + (50 + i * 54))
  .attr('y', 620)
  .attr('font-size',12)
.attr('font-weight','bold')
  .attr('text-anchor','middle')
  .text(d => d)

const table = d3.select("#table_container").append("table");
const thead = table.append("thead");
const tbody = table.append("tbody");
const tableHeaders = [
  null,
  "Total Beds",
  "20% of Adults Infected",
  "40% of Adults Infected",
  "60% of Adults Infected"
];

thead
  .append("tr")
  .selectAll("th")
  .data(tableHeaders)
  .enter()
  .append("th")
  .text((d) => d);

const columns = ["name", "totalBeds", "twenty", "forty", "sixty"];
const rows = tbody
  .selectAll("tr")
  .data(
    data.sort(
      (a, b) => b["sixty"] / b["totalBeds"] - a["sixty"] / a["totalBeds"]
    )
  )
  .enter()
  .append("tr");

const cells = rows
  .selectAll("td")
  .data((row) => {
    return columns.map((column) => {
      return { column: column, value: row[column], totBed: row["totalBeds"] };
    });
  })
  .enter()
  .append("td")
  .html((d) => {
    if (d.column === "name") {
      return d.value;
    }
    if (d.column === "totalBeds") {
      return formatDecimalComma(d.value);
    }
    return `${formatDecimalComma(d.value)} <span style='color:${color(
      d.value / d.totBed
    )}; font-weight: 600'>(${((d.value / d.totBed) * 100).toFixed(2)}%)</span>`;
  });

let prevEventTarget = document.querySelector(`.pctBtn`);
function updateData(percentage) {
  if (prevEventTarget) prevEventTarget.classList.remove("active");
  mode = percentage;
  const t = d3.transition().duration(750);
  d3.selectAll(".stateRect")
    .transition(t)
    .style("fill", (d) => color(d[mode] / d.totalBeds));
  d3.selectAll(".stateText")
    .transition(t)
    .style("fill", (d) => (d[mode] / d.totalBeds > 1.3 ? "#fff" : "#000"));
  const currentEventTarget = event.currentTarget;
  prevEventTarget = currentEventTarget;
  currentEventTarget.classList.add("active");
}
