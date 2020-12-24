import * as MRE from '@microsoft/mixed-reality-extension-sdk';
import { cleanUpSession } from './assets';
import { Die, DieType } from './die';
import { RollManager } from './rollManager';

export default class App {
	public rollManager: RollManager;

	constructor(public context: MRE.Context, public params: MRE.ParameterSet) {
		context.onStarted(() => this.onStarted());
		context.onUserJoined(user => this.onUserJoined(user));
		context.onUserLeft(user => this.onUserLeft(user));
		context.onStopped(() => this.onStopped());
	}

	private async onStarted() {

	}

	private onStopped() {
		cleanUpSession(this.context);
	}

	private onUserJoined(user: MRE.User) {
		this.rollManager = new RollManager(this);
	}

	private onUserLeft(user: MRE.User) {

	}
}
