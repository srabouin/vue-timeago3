import defaultConverter from './converter/defaultConverter';
import { defineComponent, h, onBeforeMount, onBeforeUnmount, ref, watch } from 'vue';
const createTimeago = (opts = {}) => {
    const name = opts.name || 'Timeago';
    return defineComponent({
        name: name,
        props: {
            datetime: {
                type: [String, Number, Date],
                required: true
            },
            title: {
                type: [String, Boolean],
                required: false,
                default: null,
            },
            autoUpdate: {
                type: [Number, Boolean],
                required: false,
                default: null,
            },
            converter: {
                type: Function,
                required: false,
                default: null,
            },
            converterOptions: {
                type: Object,
                required: false,
                default: null,
            }
        },
        setup(props) {
            const updateTimer = ref();
            // start the update timer
            onBeforeMount(() => {
                startUpdater();
            });
            // stop the update timer
            onBeforeUnmount(() => {
                stopUpdater();
            });
            // getTimeago calls the specified converter and converts the current time to a string "timeago"
            const getTimeago = (datetime) => {
                const converter = props.converter || defaultConverter;
                return converter(datetime || props.datetime, props.converterOptions || {});
            };
            const timeago = ref(getTimeago());
            // convert get's the current datetime as string based on the user's input
            const convert = (datetime) => {
                timeago.value = getTimeago(datetime);
            };
            // startUpdater starts a new update timer based on the user's input
            const startUpdater = () => {
                if (props.autoUpdate) {
                    const autoUpdate = props.autoUpdate === true ? 60 : props.autoUpdate;
                    updateTimer.value = setInterval(() => {
                        convert(props.datetime);
                    }, autoUpdate * 1000);
                }
            };
            // stopUpdater stops the current update timer
            const stopUpdater = () => {
                if (updateTimer.value) {
                    clearInterval(updateTimer.value);
                    updateTimer.value = undefined;
                }
            };
            // update converter if property changed
            watch(() => props.autoUpdate, (newValue) => {
                stopUpdater();
                if (newValue) {
                    startUpdater();
                }
            });
            // update converter if property changed
            watch(() => [props.datetime, props.converter], () => {
                convert();
            });
            // update converter if property changed
            watch(() => props.converterOptions, () => {
                convert();
            }, {
                deep: true
            });
            return { timeago };
        },
        render() {
            return h(
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            'timeago', {
                attrs: {
                    datetime: new Date(this.datetime).toISOString(),
                    title: typeof this.title === 'string'
                        ? this.title
                        : this.title === false
                            ? null
                            : this.timeago
                }
            }, [this.timeago]);
        },
    });
};
export { createTimeago };
//# sourceMappingURL=timeago.js.map