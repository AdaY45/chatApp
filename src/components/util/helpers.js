export const msToDate = (ms) => {
  const now = new Date();
  const then = new Date(ms);
  var d = Math.abs(now - then) / 1000;
  var r = {};
  var s = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60,
    second: 1,
  };

  Object.keys(s).forEach(function (key) {
    r[key] = Math.floor(d / s[key]);
    d -= r[key] * s[key];
  });

  if (r.year !== 0) {
    return `${r.year} years ago`;
  } else if (r.month !== 0) {
    return `${r.month} months ago`;
  } else if (r.day !== 0) {
    return `${r.day} days ago`;
  } else if (r.hour !== 0) {
    return `${r.hour} hours ago`;
  } else if (r.minute !== 0) {
    return `${r.minute} minutes ago`;
  } else if (r.second !== 0) {
    return `${r.second} seconds ago`;
  } else {
    return "1 second ago";
  }
};

export const formatBytes = (bytes) => {
    var marker = 1024;
    var decimal = 3;
    var kiloBytes = marker;
    var megaBytes = marker * marker;
    var gigaBytes = marker * marker * marker;

    if (bytes < kiloBytes) return bytes + " Bytes";
    else if (bytes < megaBytes)
      return (bytes / kiloBytes).toFixed(decimal) + " KB";
    else if (bytes < gigaBytes)
      return (bytes / megaBytes).toFixed(decimal) + " MB";
    else return (bytes / gigaBytes).toFixed(decimal) + " GB";
  };
