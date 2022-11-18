import axios from "axios";

const materialIcons =
  "https://raw.githubusercontent.com/oblador/react-native-vector-icons/master/glyphmaps/MaterialIcons.json";
const ionicons =
  "https://raw.githubusercontent.com/oblador/react-native-vector-icons/master/glyphmaps/Ionicons.json";
const fontAwesome5 =
  "https://raw.githubusercontent.com/oblador/react-native-vector-icons/master/glyphmaps/FontAwesome5Free.json";

const iconsLibraries = [materialIcons, ionicons, fontAwesome5];

let newIconsList = [];

async function getIcons(baseUrl) {
  console.log("Loading...")
  let iconFamily = baseUrl.split("glyphmaps/")[1].replaceAll(".json", "").toUpperCase()
  await axios.get(baseUrl).then((response) => {
    Object.entries(response.data).filter((item) => {
      if (item[0].includes("outline")){
        let iconObject = {id: item[1], icon: item[0], family: iconFamily}
        newIconsList.push(iconObject)
      };
    });
  });
}

iconsLibraries.forEach((lib) => getIcons(lib));

export default newIconsList