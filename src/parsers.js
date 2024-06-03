import yaml from "js-yaml";

const getParse = (filepath, extension) => {
  switch (extension) {
    case "json":
      return JSON.parse(filepath);
    case "yaml":
      return yaml.load(filepath);
    case "yml":
      return yaml.load(filepath);
  }
};

export default getParse;
