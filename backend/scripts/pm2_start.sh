APPLICATION=$1
NUM_INSTANCES=$2

BACKEND="backend"
CRONJOB="cronjob"

if [[ "$APPLICATION" == ""  ||   "$NUM_INSTANCES" == "" ]]; then
    echo "Please specify APPLICATION and NUM_INSTANCES"
    exit 1
fi

if [[ "$APPLICATION" != "$BACKEND" ]] && [[ "$APPLICATION" != "$CRONJOB" ]]; then
    echo "APPLICATION must be one of '$BACKEND' | '$CRONJOB'"
    exit 1
fi

yarn install --frozen-lockfile --production=true
yarn migrate
# yarn seed # run this with caution to prevent wiping tables with seeds

if [[ "$APPLICATION" == "$BACKEND" ]]; then
    pm2 start ./dist/src/main.js --name "climbjios-backend-${NODE_ENV}" -i $NUM_INSTANCES --wait-ready
elif [[ "$APPLICATION" == "$CRONJOB" ]]; then
    pm2 start ./dist/src/cronjob/main.js --name "climbjios-cronjob-${NODE_ENV}" -i $NUM_INSTANCES --wait-ready
fi
