if [ "$TRAVIS_PULL_REQUEST" != "false" ] ; then
   echo "1- hey that's a pull request"
fi

if [ "$TRAVIS_PULL_REQUEST" = "false" ] ; then
   echo "2- hey that's not a pull request"
fi