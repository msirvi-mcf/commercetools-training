import prettyjson from 'prettyjson';
export const log = (o) => {
    console.log(prettyjson.render(o));
}