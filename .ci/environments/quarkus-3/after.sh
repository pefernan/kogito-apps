#!/bin/bash
set -euo pipefail

script_dir_path=$(cd `dirname "${BASH_SOURCE[0]}"`; pwd -P)
mvn_cmd="mvn ${BUILD_MVN_OPTS:-} ${BUILD_MVN_OPTS_QUARKUS_UPDATE:-}"
project_version='quarkus-3-SNAPSHOT'

${mvn_cmd} -fae -N -e versions:update-parent -Dfull -DparentVersion="[${project_version}]" -DallowSnapshots=true -DgenerateBackupPoms=false
${mvn_cmd} -fae -N -e versions:update-child-modules -Dfull -DallowSnapshots=true -DgenerateBackupPoms=false