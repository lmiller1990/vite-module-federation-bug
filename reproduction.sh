# Start the first server in the background and capture its PID
(
  cd mfe-host
  pnpm run build
  pnpx serve -p 3000 --cors dist &
  echo $! > /tmp/mfe-host.pid
)

# Start the second server in the background and capture its PID
(
  cd mfe-client
  pnpm run build
  pnpx serve -p 4000 --cors dist &
  echo $! > /tmp/mfe-client.pid
)

# This function will kill background jobs using their stored PIDs
cleanup() {
  echo "Stopping servers..."
  kill $(cat /tmp/mfe-host.pid)
  kill $(cat /tmp/mfe-client.pid)
  rm /tmp/mfe-host.pid /tmp/mfe-client.pid
}

# Trap script interrupts (Ctrl+C) to clean up before exit
trap cleanup EXIT

# Wait for all background jobs to finish
wait
read -r
