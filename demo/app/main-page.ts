import * as observable from 'data/observable';
import * as pages from 'ui/page';

// Event handler for Page "loaded" event attached in main-page.xml
export function pageLoaded(args: observable.EventData) {
    // Get the event sender
    var page = <pages.Page>args.object;

}
export function PPTapped(args) {
    console.log(' Play Pause tapped : ' + args.eventData.state);
}